import Chart1 from '../Chart1';
import Chart2 from '../Chart2';
function DataVisual () {
    const data2 = [5,10,15,20,25,30]
    const w = 500;
    const h = 400;
    return (
        <div className='App'>
            <Chart1 />
            <Chart2 data={data2} w={w} h={h} color="orange" />
        </div>
    )
}

export default DataVisual;