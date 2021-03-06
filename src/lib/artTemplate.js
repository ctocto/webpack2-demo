import template from 'art-template/lib/template-web'

// 默认解析规则界定符与 'art-template-loader' 冲突，修改界定符避免冲突
// @see http://aui.github.io/art-template/zh-cn/docs/rules.html
const rule = template.defaults.rules[0]
rule.test = new RegExp(
  rule.test.source.replace('<%', '<\\?').replace('%>', '\\?>'),
)
template.defaults.minimize = true

export default template
