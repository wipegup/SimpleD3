class ClicksController < ApplicationController

  def index
    @clicks = Click.total
    respond_to do |format|
      format.html
      format.json { render json: @clicks }
    end
  end

  def create
    Click.create
    @clicks = Click.total
    respond_to do |format|
      format.html {redirect_to clicks_path}
      format.js
    end
  end

end
