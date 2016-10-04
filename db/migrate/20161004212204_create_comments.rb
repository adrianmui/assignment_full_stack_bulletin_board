class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :vote
      t.string :author
      t.text :body
      t.references :post, index: true

      t.timestamps
    end
  end
end
