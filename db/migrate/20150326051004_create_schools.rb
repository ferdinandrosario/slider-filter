class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :school_name
      t.integer :us_news_ranking
      t.integer :acceptance_rate
      t.integer :LSAT
      t.float :GPA
      t.integer :Total_applications

      t.timestamps null: false
    end
  end
end
