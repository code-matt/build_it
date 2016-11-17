class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.text :title, null: false, limit: 25
      t.text :description, null: false, limit: 200
      t.string :address, null: false
      t.float :lat
      t.float :lng
      t.integer :hourly_rate, null: false
      t.date :start_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.string :pic_url
      t.belongs_to :user
      
      t.timestamps null: false
    end
  end
end
