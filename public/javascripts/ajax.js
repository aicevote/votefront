$(document).ready(function()
{
    $('#send').click(function()
    {
        var data = "A"
        $.ajax({
            type: 'post',
            url: "result",
            data: data,
            success: function(data)
            {         
                alert('Success');
            },
            /**
             * Ajax通信が失敗した場合に呼び出されるメソッド
             */
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                alert('Error : ' + errorThrown);
            }
        });
        return false;
    });
});