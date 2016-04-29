var rotation = 0;
function rotateContainer(data,initFunction,divID)
{
  $('#' + divID ).rotate3Di(
    180,
    500,
    {
    complete: initPartialData.call(this, data, divID),
    }
  );
  switch(divID) {
    case "search-container":
        initSearch();
        break;
    case "worker-CP":
        initControlPannelButtons();
        break;
    case "job-show":
        showMap();
        initSignUpButton();
        initResignButton();
        break;
    case "add_new":
        initAdd();
        break;
  }
}

function finishRotation(divID,func1,func2){
  if (rotation === 0){
    $('#' + divID ).rotate3Di(180, 0);
    $('#' + divID ).rotate3Di(360, 500);
    rotation = 180;
  }else if(rotation === 180){
    $('#' + divID ).rotate3Di(180, 0);
    $('#' + divID ).rotate3Di(0, 500);
    rotation = 0;
  }
}
