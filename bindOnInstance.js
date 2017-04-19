function bindOnInstance(arr, instance) {
	arr.forEach(function (methodName) {
		instance[methodName] = instance[methodName].bind(instance);
	});
}

module.exports = bindOnInstance;