class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.json {render :json => @posts, :status => 200}
    end
  end

  def create
    @post = Post.new(post_params)
    respond_to do |format|
      if @post.save
        format.json { render :json => @post, :status => 200}
      else
        format.json { render :json => {:error => "Couldn't created post"}, :status => 400}
      end
    end
  end

  def show
    @post = Post.find(params[:id]).to_json( include: :comments)

    respond_to do |format|
      format.json { render :json => @post, :status => 200}
    end
  end


  private

  def post_params
    params.require(:post).permit(:author, :title, :body)
  end
end
