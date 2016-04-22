class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.text :title, null: false, limit: 25
      t.text :description, null: false, limit: 200
      t.string :address, null: false, default: "33 Harrison Ave. Boston, Ma"
      t.date :start_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.belongs_to :contractor

      t.timestamps null: false
    end
  end
end
