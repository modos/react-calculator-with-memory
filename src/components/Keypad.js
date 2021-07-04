import Key from "./Key";

const Keypad = ({
  onPressDigit,
  onPressOperator,
  onPressResult,
  onPressAC,
  onPressNegator,
  onPressDot,
  onPressMC,
  onPressMR,
  onPressMS,
  onPressMneg,
  onPressMplus
}) => {
  return (
    <>
    <div>
    <div   className="flex-keypad">
        <Key text={"MS"} wide onClick={() => onPressMS()} />
        <Key text={"M-"}  onClick={() => onPressMneg()} />
        <Key text={"M+"}  onClick={() => onPressMplus()} />
      </div>

      <div  className="flex-keypad">
      <Key text={"MC"}  wide onClick={() => onPressMC()} />
      <Key text={"MR"}  wide onClick={() => onPressMR()} />
      </div>

      <div  className="flex-keypad">
        <Key text={"AC"} onClick={onPressAC} />
        <Key text={"+/-"} onClick={onPressNegator} />
        <Key text={"%"} onClick={() => onPressOperator("%")} />
        <Key text={"/"} blue wide onClick={() => onPressOperator("/")} /> 
        
      </div>
      
      <div  className="flex-keypad">
        <Key text={"7"} onClick={() => onPressDigit(7)} />
        <Key text={"8"} onClick={() => onPressDigit(8)} />
        <Key text={"9"} onClick={() => onPressDigit(9)} />
        <Key text={"*"} blue wide onClick={() => onPressOperator("*")} />
      </div>
      <div  className="flex-keypad">
        <Key text={"4"} onClick={() => onPressDigit(4)} />
        <Key text={"5"} onClick={() => onPressDigit(5)} />
        <Key text={"6"} onClick={() => onPressDigit(6)} />
        <Key text={"-"} blue wide onClick={() => onPressOperator("-")} />
      </div>
      <div  className="flex-keypad">
        <Key text={"1"} onClick={() => onPressDigit(1)} />
        <Key text={"2"} onClick={() => onPressDigit(2)} />
        <Key text={"3"} onClick={() => onPressDigit(3)} />
        <Key text={"+"} blue wide onClick={() => onPressOperator("+")} />
      </div>
      <div  className="flex-keypad">
        <Key text={"0"}  wide onClick={() => onPressDigit(0)} />
        <Key text={"."}  onClick={onPressDot} />
        <Key text={"="} blue  res onClick={onPressResult} />
      </div>
    </div>
    </>
  );
};

export default Keypad;
