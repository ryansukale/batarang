var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var createRouter = require(ROOT + 'createRouter');

describe('#createRouter', function () {
  const router = createRouter({
    'products': '/products',
    'product_items': '/products/:p/items'
  });

  it('returns path strings', function () {
    expect(router.get('products')).to.equal('/products');
    expect(router.get('product_items')).to.equal('/products/:p/items');
  });

  it('replaces params from path', function () {
    const params = {p: 2};

    expect(router.get('product_items', {params})).to.equal('/products/2/items');
  });

  it('returns path with query', function () {
    const query = {page: 1, sort: 'name'};

    expect(router.get('products', {query})).to.equal('/products?page=1&sort=name');
  });

  it('returns path with params and query', function () {
    const params = {p: 2};
    const query = {state: 'new'};

    expect(router.get('product_items', {params, query})).to.equal('/products/2/items?state=new');
  });

  it('raises an error is route is missing', function() {
    expect(function () {
      router.get('foo');
    }).to.throw('No route found for the name "foo"');
  });
});
