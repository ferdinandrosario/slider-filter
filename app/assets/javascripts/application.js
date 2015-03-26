// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-1.11.1.min
//= require jquery-ui-1.10.2.custom.min
//= require turbolinks
//= require underscore
//= require_tree .

<script id="movie-template" type="text/html">
<div class="col-span-4 movie">
  <div class="thumbnail">
    <span class="label label-success rating"><%%= rating %>
      <i class="glyphicon glyphicon-star"></i>
    </span>
    <div class="caption">
      <h4><%%= name %></h4>
      <div class="outline">
        <%%= outline %>
        <span class="runtime">
          <i class="glyphicon glyphicon-time"></i>
          <%%= runtime %> mins.
        </span>
      </div>
        <div class="detail">
        </div>
      </div>
    </div>
  </div>
</script>