import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';
import {RootState} from '../../store/index';
import {addComment} from '../../store/action';

const mapStateToProps = (state: RootState) => ({
  comments: state.productReducer?.comments,
});

const mapDispatchToProps = {
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
