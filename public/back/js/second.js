/**
 * Created by Jepson on 2018/5/11.
 */


$(function() {

  // 当前页
  var currentPage = 1;
  // 每页多少条
  var pageSize = 5;

  // 1. 一进入页面调用 render 进行ajax请求, 页面渲染
  render();


  function render() {

    $.ajax({
      type: "GET",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function( info ) {
        console.log( info );
        // 结合模板引擎渲染
        var htmlStr = template("secondTpl", info);
        // 渲染到页面中
        $('.lt_content tbody').html( htmlStr );

        // 进行分页配置
        $('#paginator').bootstrapPaginator({
          // 设置一个版本号
          bootstrapMajorVersion: 3,
          // 总页数
          totalPages: Math.ceil(info.total / info.size),
          // 当前页
          currentPage: info.page,
          // 点击页码渲染页面
          onPageClicked: function( a, b, c, page ) {
            // 更新当前页
            currentPage = page;
            // 重新渲染页面
            render();
          }
        })

      }
    })

  }


})