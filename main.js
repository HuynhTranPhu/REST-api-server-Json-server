// 1. Tạo một REST api server sử dụng json-server
// 2. Đọc documentation của json-server và axios, tìm hiểu các method GET, POST, PUT, PATCH, DELETE
// 3. Làm các ví dụ sử dụng axios để gửi các request lên json-server để tạo object mới, update 1 object với dữ liệu mới, xoá 1 object
// Lưu ý: đây là một bài khó nếu bạn là beginner, tuy nhiên, khi hiểu được bài này bạn sẽ có thể lên 1 level mới (beginner cao cấp).
// Hãy dành 1 ngày để đọc, tìm hiểu, thử. Sau 1 ngày nếu bạn không làm được thì có thể hỏi trên Coders.Tokyo Slack hoặc JsLand.
var url = 'http://localhost:9081/todoList';

// Method GET: Được dùng để yêu cầu dữ liệu từ nguồn tài nguyên được chỉ định.
// Lưu ý:
// 	+ Requests GET có thể bị lưu trữ
//   + Requests GET vẫn còn trong lịch sử trình duyệt
//   + Requests GET có thể bị đánh dấu
//   + Đối với những dữ liệu quan trọng, nhạy cảm không nên sử dụng GET.
//   +	Bị giới hạn độ dài

axios.get(url)
    .then(function(res){
    var items = res.data;
    console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

//     Method POST: Chỉ được dùng để gửi dữ liệu đến máy chủ để tạo hoặc cập nhật tài nguyên.

// 	Lưu ý:
//   + POST requests không bao giờ bị lưu trữ
//   + không bị lưu trong lịch sử
//   + Không bị đánh dấu
//   + Không bị giới hạn về độ dài lưu lượng   

axios.post(url, {content : "Sleep"})
    .then(function(res){
        console.log(res.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    // Đặc biệt GET có thể đẩy dữ liệu lên  và POST có thể dùng để lấy dữ liệu xuống.
    //  GET không có body. POST khá an toàn với Client nhưng với Server thì lại khác

//Method PUT: Được sử dụng để gửi dữ liệu đến máy chủ để tạo mới hoặc cập nhật tài nguyên. PUT is idempotent.
axios.put('http://localhost:9081/todoList/1',{
    content:"Put day ne"})
    .then(function(res){
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

//  //   Method PATCH: Có thể hiểu là bạn cần sửa phần nào thì gửi phần đó đó   
 axios.patch('http://localhost:9081/todoList/1',{
    content:"patch"})
    .then(function(res){
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

//  //Method Delete: Được dùng để xoá tài nguyên được chỉ định, và khi xoá thành công sẽ có một số mã trạng thái được trả về :  
axios.delete('http://localhost:9081/todoList/2')
    .then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })