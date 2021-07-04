import MemoryItem from './memoryItems.js';

const Memory = ({items, mp, mc, mm}) => {

    var all = []; 

    // for (let index = 0; index < items.length; index++) {
    //     all.push(<MemoryItem number={items[index]} mp={this.mp(e)} mc={this.mc(e)} mm={this.mm(e)}></MemoryItem>)
    // }

    return (
        <>
          <div className="memory">
              {all}
         </div>
        </>
      );
  };

export default Memory;  