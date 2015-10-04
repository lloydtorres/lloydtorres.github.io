var ref = new Firebase("https://givemetaco.firebaseio.com/");

Myo.connect('com.myojs.poseDetector');

ref.child("messages").on("child_added", function(snapshot) {
    var text = snapshot.val();
    $('.binary-messages').append(text + " ");
});

counter = 1;
binarystring = "";

Myo.on('pose', function(pose){
    if (pose == "fist") {
        handlePose("0");
    }
    else if (pose == "fingers_spread") {
        handlePose("1");
    }
    else if (pose == "wave_in") {
        handleMessage();
    }
    
})

handlePose = function(adder) {
    binarystring += adder;
    $('#ind' + counter).text(adder);
    counter++;
    if (counter >= 9) {
        $('.text').append(String.fromCharCode(parseInt(binarystring,2)));
        binarystring = "";
        counter = 0;

        for (i=1; i<9; i++) {
            $('#ind' + i).text("_");
        }
    }
}

handleMessage = function() {
    newText = $(".text").text().trim();
    if (newText.length > 0) {
        var postsRef = ref.child("messages");
        postsRef.push().set(newText);
        $('.text').text("");
    }
}