class AlbumsController < ApplicationController
  def index
    @albums = Albums.all
  end

  def show
    @albums = Albums.find(params[:id])
  end

  def new
    @albums = Albums.new
  end

  def create
    @albums = Albums.new(params[:albums])
    if @albums.save
      redirect_to @albums, :notice => "Successfully created albums."
    else
      render :action => 'new'
    end
  end

  def edit
    @albums = Albums.find(params[:id])
  end

  def update
    @albums = Albums.find(params[:id])
    if @albums.update_attributes(params[:albums])
      redirect_to @albums, :notice  => "Successfully updated albums."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @albums = Albums.find(params[:id])
    @albums.destroy
    redirect_to albums_url, :notice => "Successfully destroyed albums."
  end
end
