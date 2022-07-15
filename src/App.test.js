import renderer from 'react-test-renderer';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About'

it('about renders correctly', () => {
  const tree = renderer
    .create(<About />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('gallery renders correctly', () => {
  const tree = renderer
    .create(<Gallery />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
