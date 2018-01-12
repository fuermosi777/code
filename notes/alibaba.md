1. 实现一个 `convert` 函数, 接收一个整数 `n` (0<= n <= 10^12)，返回符合下表规则的自定义7进制结果：
> 建议时间：10~15分钟

| base10 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- |--- | --- | --- | --- | --- | --- |
| base7 | f | c | e | 2 | 0 | 1 | 7 |

示例:

- 输入: 7, 结果：cf
- 输入: 2017 , 结果：17cc

function convert(base10) {
  let dict = ['f', 'c', 'e', '2', '0', '1', '7']; // compare table
  let res = '';  // the result string
  let remainder = base10;
  while (remainder > 7) {
    let q = a % 7; // quotient
    res = dict[q] + res;
    remainder = remainder / 7 | 0;
  }
  res = dict[remainder] + res;
  return res;
}


2. 实现一个debounce(func, wait, immediate)函数，该函数能够在高频调用的时候只执行最后一次调用(250ms 认为是高频的)

/**
@param func 目标函数
@param wait 毫秒数
@param immediate 是否立即执行 
**/
function debounce(func, wait, immediate) {
  let t;
  let callNow = immediate;
  
  return function(...args) {
    if (callNow) {
      func(...args);
      callNow = false;
    }
    
    clearTimeout(t);
    t = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

var myEfficientFn = debounce(function() {
console.log("trigger");
}, 250, false);

//提醒：resize 是个高频操作
window.addEventListener('resize', myEfficientFn, false);

3. 请完成React组件封装，能够实现如下长度展示功能封装，并且不失input原生组件能力。
![](https://zos.alipayobjects.com/skylark/fa965c45-088f-4a07-9f41-58af0871c0cb/attach/8107/4cb06836ae8f268b/image.png)

value   当前的value 值  string      
defaultValue    初始化的value 值 string      
onChange    发生改变的时候触发的回调    Function(value, e)  

import PropTypes from 'prop-type';

class MyInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    allowedLength: PropTypes.number
  };

  static defaultProps = {
    defaultValue: '',
    allowedLength: 10
  };

  constructor(props) {
    super(props);
    
    let val = props.hasOwnProperty('value') ? props.value : props.defaultValue;
    this.state = {
      val
    };
  }

  handleInputChange = e => {
    this.setState({val: e.target.value});
    if (this.props.onChange) {
      this.props.onChange(e.target.value, e);
    }
  }
  
  render() {
    const { allowedLength } = this.props;
    
    return (
      <div className="MyInput">
        <input type="text" value={this.state.val} onChange={this.handleInputChange}/>
        <span>{`${this.state.val.length}/${allowedLength}`}</span>
      </div>
    );
  }
}


4. 如何实现以下布局
![](https://img.alicdn.com/tfs/TB10X27PVXXXXX3XFXXXXXXXXXX-400-400.png) 

// html
<div class="wrapper">
  <div class="box-1"></div>
  <div class="box-2"></div>
  <div class="box-3"></div>
</div>
    
// css
.wrapper {
  display: flex;
    justify-content: space-between;
    align-items: center;
}
    




