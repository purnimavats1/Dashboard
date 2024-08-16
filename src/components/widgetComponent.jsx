import PieChartWidget from './pieChartWidget';
import GraphWidget from './graphWidget';
import BarChartWidget from './barChart';
import BubbleChartWidget from './bubbleChart';

const widgetComponents = {
  'pie-chart': PieChartWidget,
  'graph': GraphWidget,
  'stacked-bar-chart': BarChartWidget,
  'bubble-chart': BubbleChartWidget,
};

export default widgetComponents;
