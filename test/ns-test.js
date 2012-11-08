/*jshint
	undef:false
*/

buster.testCase("ns::", {
  "ns should be defined as a function": function () {
    assert.isFunction(ns);
  }
  , "no 'foo' is defined": function () {
    assert.exception(function () {
      foo;
    }, "ReferenceError");
  }
  , "no 'a' is defined": function () {
    assert.exception(function () {
      a;
    }, "ReferenceError");
  }
  , "defining a new (default empty) ns obj should work": function () {
    ns("foo.bar");
    assert.isObject(foo.bar);
  }
  , "defining a new ns obj with content should work": function () {
    ns("a.b.c", {"foo": 1, "bar": 2});
    assert(a.b.c.foo===1 && a.b.c.bar===2);
  }
  , "assuring that an existing ns obj exists should work": function () {
    refute.exception(function () {
      ns("a.b");
    });
    assert.isObject(a.b);
  }
  , "overwriting an existing ns obj should throw": function () {
    assert.exception(function () {
      ns("a.b", {"bork": true});
    });
    refute.defined(a.b.bork);
  }
  , "assuring that an existing ns leaf obj exists should work": function () {
    refute.exception(function () {
      ns("a.b.c");
    });
    assert.isObject(a.b.c);
  }
  , "overwriting an existing ns leaf obj should throw": function () {
    assert.exception(function () {
      ns("a.b.c", {"x": 1});
    });
    refute.defined(a.b.c.x);
  }
});
