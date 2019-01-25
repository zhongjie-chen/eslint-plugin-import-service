'use strict';

const create = function (context) {
	return {
		ImportDeclaration(node) {
			const pathValue = node.source.value;
			// 改为正则表达式
			if (/dubbo\/service\/com.dianwo/.test(pathValue)) {
				const className = pathValue.split('.').reverse()[0]
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