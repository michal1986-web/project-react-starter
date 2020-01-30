import {connect} from 'react-redux';
import Search from './Search.js';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createActionChangeSearchString,
} from '../../redux/searchStringRedux.js';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionChangeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
