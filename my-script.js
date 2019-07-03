    

      function clearField() {
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        window.location.href = "index.html";
      }

      var globId;
      function listOf() {

        var buttonIdForHiddden = localStorage.getItem("buttonId");
        if (buttonIdForHiddden === "save") {
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          document.getElementById("updateBtn").style.display = 'none';
        }
        else {
          document.getElementById("saveBtn").style.display = "none";
          var index = localStorage.getItem("index");
        globId = index;
        var dataToUpdate = JSON.parse(localStorage.getItem("blogContent"));
        document.getElementById("name").value = dataToUpdate[index].n;
        document.getElementById("message").value = dataToUpdate[index].m;
        }
        
      }

      function save() {
        var check = JSON.parse(localStorage.getItem("blogContent"));
        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;

        var arr =
        {
          "n": name,
          "m": message
        }
        if (check === null) {
          var check = []
          check.push(arr);
          localStorage.setItem("blogContent", JSON.stringify(check));
        }
        else {
          check.push(arr);
          localStorage.setItem("blogContent", JSON.stringify(check));
        }
        alert("Successfully Data has Stored");
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        window.location.href = "index.html";
      }

      function update() {

        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;
        var updateData = JSON.parse(localStorage.getItem("blogContent"));
        var updatedRecord = updateData;
        updatedRecord[globId].n = name;
        updatedRecord[globId].m = message;
        localStorage.setItem("blogContent", JSON.stringify(updatedRecord));
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        window.location.href = "index.html";
      }
