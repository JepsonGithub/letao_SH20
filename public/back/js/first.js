/**
 * Created by Jepson on 2018/5/11.
 */
$(function() {

  // 表示当前页
  var currentPage = 1;
  // 每页多少条
  var pageSize = 5;


  // 1. 发送请求, 获取数据, 通过模板引擎渲染页面
  //    一进入页面就进行调用渲染
  render();

  function render() {
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function( info ) {
        console.log( info );

        // 使用模板引擎将数据和模板相结合, 进行渲染
        // 模板引擎第二个参数是一个数据对象
        // 在模板中可以任意使用传入的参数对象中的所有属性
        var htmlStr = template("firstTpl", info );
        // 渲染页面
        $('.lt_content tbody').html( htmlStr );

        // 进行分页插件配置
        $('#paginator').bootstrapPaginator({
          // 指定bootstrap版本
          bootstrapMajorVersion: 3,
          // 总共多少页
          totalPages: Math.ceil( info.total / info.size ),
          // 当前页
          currentPage: info.page,
          // 给页面添加点击事件
          onPageClicked: function( a, b, c, page ) {
            // 将当前页更新成 page
            currentPage = page;

            // 重新渲染页面
            render();
          }
        })
      }
    })
  }

})
