class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string :img_url1
      t.string :img_url2
      t.string :img_url3
      t.string :img_url4
      t.string :img_url5
      t.string :title

      t.timestamps
    end
  end
end
