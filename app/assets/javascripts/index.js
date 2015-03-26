var school_data;
$(document).ready(function(){

  initSliders();
  // get_data();


  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var FJS = FilterJS(school_data, '#movies', {
    template: '#movie-template',
    callbacks: {
      afterFilter: function(result){
        $('#total_movies').text(result.length);
      }
    }
    //appendToContainer: appendToContainer
  });

  FJS.addCallback('beforeAddRecords', function(){
    if(this.recordsCount >= 450){
      this.stopStreaming();
      alert(1);
    }
  });

  FJS.addCallback('afterAddRecords', function(){
    var percent = (this.recordsCount - 250)*100/250;
    alert(1);
    $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      $('#stream_progress').parent().fadeOut(1000);
    }
  });
    // $(".container").click(function(){
    //   console.log(school_data);
    // });

  FJS.setStreaming({

    data_url: '/get_data',
    stream_after: 1,
    batch_size: 10
  });

  // FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range', all: 'all'});
  FJS.addCriteria({field: 'us_news_ranking', ele: '#us_news_ranking_filter', type: 'range'});
  FJS.addCriteria({field: 'LSAT', ele: '#LSAT_filter', type: 'range'});
  // FJS.addCriteria({field: 'genre', ele: '#genre_criteria input:checkbox'});

  window.FJS = FJS;
});

function get_data(){

    $.ajax({
      url: "/get_data",
      success: function(data) {
        school_data = data
        // alert(JSON.stringify(school_data));
      }
    });
}
function initSliders(){
  $("#rating_slider").slider({
    min: 5,
    max: 10,
    values:[5, 10],
    step: 0.1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $("#runtime_slider").slider({
    min: 10,
    max: 250,
    values:[0, 250],
    step: 10,
    range:true,
    slide: function( event, ui ) {
      $("#runtime_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
      $('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  // $('#genre_criteria :checkbox').prop('checked', true);
  // $('#all_genre').on('click', function(){
  //   $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  // });
}