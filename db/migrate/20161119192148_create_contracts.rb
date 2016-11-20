class CreateContracts < ActiveRecord::Migration[5.0]
  def change
    create_table :contracts do |t|
      t.integer :user_id
      t.integer :employee_id
      t.integer :job_id
      t.text :proposal
      t.boolean :accepted, default: false
    end
  end
end
