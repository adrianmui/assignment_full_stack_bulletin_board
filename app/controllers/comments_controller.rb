class CommentsController < ApplicationController

  def index
    @comments = Comment.all

    respond_to do |format|
      format.json { render :json => @comments, :status => 200}
    end
  end

  def create
    @comment = Comment.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.json { render :json => @comment, :status => 200}
      else
        format.json { render :json => {:error => "Couldn't created comment"}, :status => 400}
      end
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:author, :body, :vote, :post_id)
  end
end
