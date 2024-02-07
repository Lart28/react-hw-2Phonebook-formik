import { Label } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
  <Label htmlFor="">Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange}/>
</Label>
)

export default Filter;