import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';
import {RootState} from '../../store/index';
import {addComment} from '../../store/action';

const mapStateToProps = (state: RootState) => ({
  comment: state.productReducer?.comment,
});

const mapDispatchToProps = {
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
