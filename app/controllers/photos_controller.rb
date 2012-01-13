class PhotosController < ApplicationController
  
  def new
    @album = Album.find(params[:album_id]) 
    @photo = @album.photos.new
  end
  
  def create 
    @album = Album.find(params[:album_id]) 
    @photo = @album.photos.new(params[:photo])
    @photo.save
    @album.save
    redirect_to @album
  end
  
end