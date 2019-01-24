'use strict';

const create = function (context) {
	return {
		ImportDeclaration(node) {
			const pathValue = node.source.value;
			if (~pathValue.indexOf('dubbo/service/com.dianwo')) {
				const className = pathValue.split('.').reverse()[0]
				console.log(className);
				if (className !== className.toLowerCase()) {
					context.report({
						node,
						message: 'Unallowed use of uppercase file path. Use lowercase instead'
					});
				}
			}
		}
	};
};

module.exports = {
	create,
	meta: {
		docs: {
			description: 'Forbid the use of uppercase.',
			recommended: 'error',
			url: 'https://github.com/zhongjie-chen/eslint-plugin-import-service'
		}
	}
};