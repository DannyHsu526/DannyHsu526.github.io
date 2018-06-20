var accessToken = "bfb887b9afa34fdcbdcd39374e4504f3";
var baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {
    $("#inputButton").keypress(function(event) {
				if (event.which == 13) {
					event.preventDefault();
                    setResponse("You: " + $("#inputButton").val() + "\n");
					send();
				}
			});
			$("#rec").click(function(event) {
				switchRecognition();
			});
		});

		var recognition;

		function startRecognition() {
			recognition = new webkitSpeechRecognition();
			recognition.onstart = function(event) {
				updateRec();
			};
			recognition.onresult = function(event) {
				var text = "";
			    for (var i = event.resultIndex; i < event.results.length; ++i) {
			    	text += event.results[i][0].transcript;
			    }
			    setInput(text);
				stopRecognition();
			};
			recognition.onend = function() {
				stopRecognition();
			};
			recognition.lang = "en-US";
			recognition.start();
		}
	
		function stopRecognition() {
			if (recognition) {
				recognition.stop();
				recognition = null;
			}
			updateRec();
		}

		function switchRecognition() {
			if (recognition) {
				stopRecognition();
			} else {
				startRecognition();
			}
		}

		function setInput(text) {
			$("#inputButton").val(text);
			send();
		}

		function updateRec() {
			$("#rec").text(recognition ? "Stop" : "Speak");
		}

		function send() {
			var text = $("#inputButton").val();
			$.ajax({
				type: "POST",
				url: baseUrl + "query?v=20150910",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),

				success: function(data) {
                    //setResponse(JSON.stringify(data, undefined, 2));
                    var result = JSON.stringify(data, undefined, 2);
                    var jsonData = JSON.parse(result);
                    setResponse("Bot: " + jsonData.result.fulfillment.speech+"\n");
                    $("#inputButton").val("");
                    if(!jsonData.result.actionIncomplete){
                        getWeatherData(jsonData.result.parameters);
                    }
				},
				error: function() {
					setResponse("Internal Server Error");
				}
			});
			//setResponse("Loading...");
		}

		function setResponse(val) {
			//$("#response").text(val);
            $("#response").prepend(val);
		}
        
        function getWeatherData(queryInfo){
            var url = "http://api.openweathermap.org/data/2.5/weather?";
            var appid = "5d0acef4d4e3a8ebd7a9bf6ad78da1f0";
            var data = $.getJSON(url,{
                q:queryInfo["geo-city"],
                APPID:appid,
                units:"metric"
            });
            data.then(
                function(msg){
                    setResponse("Bot : The weather is " + msg.weather[0].description + " and the temperature is" + 
                               " around " + msg.main.temp+"&#8451;.\n");
                }
            );
            data.catch(
                function(msg){
                    console.log("Error!");
                }
            );
        }