var ns;
("undefined"==typeof ns) && (ns = (function () {
  function _getClass(v) {return {}.toString.call(v);}
  function doPutCustomLeaf(context, leaf, obj) {
    if (leaf in context) {
      throw new Error("Could not overwrite existing leaf object: "+JSON.stringify(context[leaf])+", "+Object.keys(context[leaf]));
    }
    else {context[leaf] = obj;}
  }
  var nonBlank = /\S+/
    , global = this;

  return function (path, obj) {
    if (typeof path != "string") {throw new Error("Namespace path must be a non-empty string (was "+_getClass(path)+" "+path+")");}
    var parts = path.split("."), len, idx, leaf
      , context = global, root = parts[0];
    if (!nonBlank.test(root)) {throw new Error("Namespace root must not be a blank/empty string (was '"+root+"')");}
    var putCustomLeaf = arguments.length == 2;
    for (idx=0, len=parts.length; idx<len; ++idx) {
      leaf = parts[idx];
      if (putCustomLeaf && idx==len-1) {
        doPutCustomLeaf(context, leaf, obj);
      }
      else if (!(leaf in context)) {context[leaf] = {};}
      else if (_getClass(context[leaf])!="[object Object]") {
        throw new Error("Could not overwrite existing non-object prop "+parts.slice(0, idx+1).join(".")+" (was ["+context[leaf]+"])");
      }
      context = context[leaf];
    }
    return context;
  };
})());
