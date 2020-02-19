$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $butCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  /*calc button click event*/
$butCal.click(function(){

  //get value
  var w=Number($width.val()),
      h=Number($height.val());
  //calculate
    var p=2*(w+h),
       a=w*h;

//x  做近似处理的数  n 小数点后面保留第n位
 function roundFractional(x) 
{
  return Math.round(x*Math.pow(10,3))/Math.pow(10,3);
}
  //output
  $perimeter.val(roundFractional(p));
  $area.val(roundFractional(a));
})
})
