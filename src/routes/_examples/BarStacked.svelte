<script>
	import { LayerCake, Svg, flatten } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleBand } from 'd3-scale';

	import fruit from '../../data/fruitOrdinal.csv';
	import BarStacked from '../../components/BarStacked.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisYScaleBand from '../../components/AxisYScaleBand.svelte';

	const seriesNames = Object.keys(fruit[0]).filter(d => d !== 'year');

	fruit.forEach(row => {
		seriesNames.forEach(name => {
			row[name] = +row[name];
		});
	});

	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(fruit);

	function formatTickX (d) {
		if (d > 999) {
			return Math.round(d / 1000) + 'k';
		}
		return d;
	}

	const seriesColors = ['#00bbff', '#8bcef6', '#c4e2ed', '#f7f6e3'];
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, bottom: 20, left: 30 }}
		y={d => d.data.year}
		x={[0, 1]}
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		yDomain={['2016', '2017', '2018', '2019']}
		flatData={flatten(series)}
		data={series}
		custom={{ seriesNames }}
	>
		<Svg>
			<AxisX
				baseline={true}
				snapTicks={true}
				formatTick={formatTickX}
			/>
			<AxisYScaleBand
				gridlines={false}
			/>
			<BarStacked
				{seriesColors}
			/>
		</Svg>
	</LayerCake>

</div>
