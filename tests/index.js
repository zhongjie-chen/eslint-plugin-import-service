var eslint = require("eslint");
var RuleTester = eslint.RuleTester
var rules = require('../lib/rules/lowercase-service-path')

var ruleTester = new RuleTester({
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});
ruleTester.run("lowercase-service-path", rules, {
  valid: [
    {
      code: "import rewardMemberQueryProvider from '../dubbo/service/com.dianwoba.mservice.reward.provider.conf.rewardmemberqueryprovider'",
    }
  ],
  invalid: [
    {
      code: "import rewardMemberQueryProvider from '../dubbo/service/com.dianwoba.mservice.reward.provider.conf.Rewardmemberqueryprovider'",
      errors: [{ message: "Unexpected invalid path" }]
    },
    {
      code: "import rewardMemberQueryProvider from '../dubbo/service/com.dianwoba.mservice.reward.provider.conf.RewardmeMberQueryProvider'",
      errors: [{ message: /^Unexpected.+variable/ }]
    }
  ]
});