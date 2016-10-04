class CommentsController < ApplicationController

  def index
    @comments = Comment.all

    respond_to do |format|
      format.json { render :json => @comments, :status => 200}
    end
  end
end
