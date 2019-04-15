class CreateClicks < ActiveRecord::Migration[5.1]
  def change
    create_table :clicks do |t|
      t.timestamps
    end
  end
end
