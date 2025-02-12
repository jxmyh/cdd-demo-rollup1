module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'], // scope 不能为空
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix',  // 修复问题
        'docs', // 文档修改
        'style', // 代码格式（不影响功能，如空格、分号等）
        'refactor', // 代码重构
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'perf' // 性能优化
      ]
    ]
  }
};