class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :address, null: false, default: "33 Harrison Ave. Boston, Ma"
      t.belongs_to :contractor

      t.timestamps null: false
    end
  end
end
