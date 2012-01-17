class TagsController < ApplicationController

     def new

     end

    def create
      @album = Album.find(params[:album_id])
      @photo = @album.photos.find(params[:photo_id])
      @photo.tags.build(params[:tag])
      if @photo.save
      @msg = "created"
      else
        @msg = "There were some error ! Plz try again "
      end
     respond_to do |format|
     format.js
     end
    end
end

