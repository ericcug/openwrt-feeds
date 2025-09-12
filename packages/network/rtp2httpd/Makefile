include $(TOPDIR)/rules.mk

PKG_NAME:=rtp2httpd
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/ericcug/rtp2httpd.git
PKG_SOURCE_VERSION:=v1.0.0
PKG_HASH:=skip

PKG_MAINTAINER:=ericcug

include $(INCLUDE_DIR)/package.mk

inherit rust

define Package/rtp2httpd
	SECTION:=net
	CATEGORY:=Network
	TITLE:=Convert multicast RTP/UDP IPTV streams into HTTP streams with FCC support
	URL:=https://github.com/ericcug/rtp2httpd
	DEPENDS:=+rust
endef

define Package/rtp2httpd/description
	rtp2httpd converts multicast RTP/UDP media into http stream.
	It acts as a tiny HTTP server. When client connect,
	pre-configured multicast RTP service is choosen by URL.
	Program then join pre-configured multicast address and translate
	incoming RTP data to HTTP stream.
	This is a Rust version.
endef

define Package/rtp2httpd/install
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/rtp2httpd.init $(1)/etc/init.d/rtp2httpd
	$(INSTALL_DIR) $(1)/usr/bin/
	$(INSTALL_BIN) $(Cargo/Target/Path)/rtp2httpd $(1)/usr/bin/
endef

$(eval $(call BuildPackage,rtp2httpd))