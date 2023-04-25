// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filterSlice';
import styled from 'styled-components';

export const Filter = () => {
  const filter = useSelector(state => state.filters);

  const dispatch = useDispatch();

  return (
    <>
      <label>
        Search contact:
        <Field
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={e => dispatch(getFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };
const Field = styled.input`
  margin-left: 15px;
  margin-right: 10px;
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  height: 20px;
  font-family: inherit;
  font-size: 18px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #008296, 0 0 20px #008296, 0 0 30px #008296,
      0 0 60px #008296;
  }
`;
