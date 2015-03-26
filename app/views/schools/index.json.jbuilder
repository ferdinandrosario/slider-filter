json.array!(@schools) do |school|
  json.extract! school, :id, :school_name, :us_news_ranking, :acceptance_rate, :LSAT, :GPA, :Total_applications
  json.url school_url(school, format: :json)
end
