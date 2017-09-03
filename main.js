!function(){

/** コンソール */
    // ログ出力用
    function clickBtn(){
        console.log('ログを出力');
    }
    document.getElementById('btn').addEventListener('click', clickBtn);
 
/*  デバッグ  */
    //　送信ボタンが押された時
    function breakPoint(e){
        const value = document.getElementById('input').value;
        console.log(value);
    }
    document.getElementById('submit').addEventListener('click', breakPoint);


    // 条件ブレイクポイント設定
    function breakPoint2(){
        for(let i=0; i<100; i++){
            // iが30の時にブレークさせる
            console.log(`i : ${i}`);
        }
    }
    document.getElementById('execute').addEventListener('click', breakPoint2);

    // サブツリーの変更時
    function subtreeEdit(){
        const child = document.getElementById('child');
        const parent = document.getElementById('parent');
        child.innerText = '子供';        // Nodeの挿入と削除のみなので、スルー♪
        child.innerHTML = '子供<div>孫</div>'; // とまる！！
        parent.removeChild(child);            // とまる！！
        console.log('サブツリーを変更しました。');

    }
    document.getElementById('edit').addEventListener('click', subtreeEdit);



    // 属性変更時
    function addAttr(){
        const attr = document.getElementById('attr');
        attr.setAttribute('class', 'attr');
        console.log('属性を変更しました。');
    }
    document.getElementById('add').addEventListener('click', addAttr);

    // ノード削除時
    function deleteTarget(){
        const target = document.getElementById('target');
        attr.parentNode.removeChild(target);
        console.log('削除しました。');
    }
    document.getElementById('delete').addEventListener('click', deleteTarget);

}();
