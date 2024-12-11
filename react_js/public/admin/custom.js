$(document).ready(function () { 
    $('.select2').select2(); 

      $(".decimal-only").keypress(function (e) {
          if(e.which == 46){
              if($(this).val().indexOf('.') != -1) {
                  return false;
              }
          }
          if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
              return false;
          }
        });

        $(".integers-only").keypress(function (e) {
          if(e.which == 46){
              if($(this).val().indexOf('.') != 0) {
                  return false;
              }
          }
          if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
              return false;
          }
        });

        
        $(".filter-datatable").click(function() {
             $('#dt-ajax-array').DataTable().ajax.reload();
        });

        $(".clear-filter-datatable-without-reload").click(function() {
            $(".filter-input").val('');
            $(".filter-input-select").val('').select2();
            $('#dt-ajax-array').DataTable().ajax.reload();
        });
        
        $(".clear-filter-datatable-with-reload").click(function() {
            location.reload();
        });
});

