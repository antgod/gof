// 现在来改写一下代码，既然只需要区别男女模特，那我们先把 underwear 参数从构造函数中
// 移除，构造函数只接收 sex 参数
var Model = function (sex) {
	this.sex = sex;
};
Model.prototype.takePhoto = function () {
	console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};
// 分别创建一个男模特对象和一个女模特对象：
var maleModel = new Model('male'),
	femaleModel = new Model('female');
// 给男模特依次穿上所有的男装，并进行拍照：
for (var i = 1; i <= 5; i++) {
	maleModel.underwear = 'underwear' + i;
	maleModel.takePhoto();
};
// 同样，给女模特依次穿上所有的女装，并进行拍照：
for (var j = 1; j <= 5; j++) {
	femaleModel.underwear = 'underwear' + j;
	femaleModel.takePhoto();
};
// 可以看到，改进之后的代码，只需要两个对象便完成了同样的功能。